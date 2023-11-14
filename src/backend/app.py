from openai import OpenAI
import openai
import uvicorn
from config import Settings
from fastapi import FastAPI

settings = Settings()
app = FastAPI()
client = OpenAI(api_key = settings.open_ai_key)


@app.get("/")
def get_input():
    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello!"}
    ]
  )
    return completion.choices[0].message
