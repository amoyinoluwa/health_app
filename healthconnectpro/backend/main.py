from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import model
from config import Settings
from openai import OpenAI

settings = Settings()
app = FastAPI()
client = OpenAI(api_key = settings.open_ai_key)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/bot")
def get_input(q: str, model_type: str = "llama"):
    if model_type == "chatgpt":
        completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"{q}"}
        ]
    )
        return {"response": completion.choices[0].message}
    return {"response": model.predict(q)}
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8888, reload=True)