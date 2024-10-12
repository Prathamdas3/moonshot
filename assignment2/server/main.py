from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from string import ascii_letters
import random
import asyncio


app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

count = 0


def generate_random_string() -> str:
    random_str = ""
    for _ in range(11):
        random_str += random.choice(ascii_letters)

    return random_str


@app.websocket("/ws")
async def websocket(websocket: WebSocket):
    await websocket.accept()
    global count
    count = 0
    try:
        while True:
            count += 1
            await asyncio.sleep(2)
            await websocket.send_json({"count": count})
    except Exception as e:
        print(f"Error: {e}")
    finally:
        await websocket.close()


@app.get("/")
async def send_random_number():
    return {"data": generate_random_string()}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app)
