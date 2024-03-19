import { onSnapshot, collection } from "firebase/firestore";
import { useEffect } from "react";
import db from "./config/firebase";
import { useState } from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "sherlavenous"), (snapshot) => {
            // console.log(snapshot.docs.map((doc) => doc.data()));
            setData(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);
    return (
        <>
            <>Hi Guys</>
            <>
                {data.map((data) => {
                    return <h1>{data.question}</h1>;
                })}
            </>
        </>
    );
}
export default App;
