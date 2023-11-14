from openai import OpenAI
from config import Settings
from fastapi import FastAPI
# import openai
# import uvicorn

settings = Settings()
app = FastAPI()
client = OpenAI(api_key = settings.open_ai_key)


@app.get("/")
def get_input(q: str):
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": f"{q}"}
    ]
  )
    return completion.choices[0].message
