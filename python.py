import asyncio

async def print_every_sec():
    while True:
        print("Hello")
        await asyncio.sleep(1)

def input():
    while True:
        input("say something: ")

if __name__ == "__main__":
    try:
        asyncio.run(print_every_sec())
        asyncio.run(input())
    except:
        print("Goodbye")
    