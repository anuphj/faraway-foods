import base64, json, os, re, time
import boto3

table = boto3.resource("dynamodb").Table(os.environ["TABLE_NAME"])
EMAIL_RE = re.compile(r"[^@\s]+@[^@\s]+\.[^@\s]+")


def handler(event, context):
    try:
        body = event.get("body") or "{}"
        if event.get("isBase64Encoded"):
            body = base64.b64decode(body).decode("utf-8")
        data = json.loads(body)
        email = str(data.get("email", "")).strip().lower()
        if len(email) > 254 or not EMAIL_RE.fullmatch(email):
            return {"statusCode": 400, "body": "invalid"}
        if data.get("consent") is not True:
            return {"statusCode": 400, "body": "consent required"}
        table.put_item(Item={
            "email": email,
            "ts": int(time.time()),
            "consent": True,  # opted in to updates, recorded with time and source
            "source": str(data.get("source", "site"))[:40],
        })
        return {"statusCode": 200, "body": "ok"}
    except Exception:
        return {"statusCode": 500, "body": "error"}
