import React, {useEffect, useState} from "react";


export const Counter = () => {
    const [count, setCount] = useState<number>(0);
    const [items, setItems] = useState(["гашиш", "снюсик", "монстр черный оригинальный"]);
    const [newElement, setNewElement] = useState("");

    useEffect(() => {
        console.log(`Массив ништяков изменился: ${items}`);
    })

    return (
        <Container>
            <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
                <button className="text-2xl" onClick={() => setCount(count+1)}>
                    жми
                </button>
                <div className="text-3xl">{count}</div>
                <h2>Видимость: {isVisible ? "Видно" : "Скрытно"}</h2>
                <Button
                    color="secondary"
                    size = "small"
                    title = "Изменить видимость"
                    onClick={() => setIsVisible(!isVisible)}>
                        Перекключить видимость
                </Button>
            </div>
        </Container>
    );
}