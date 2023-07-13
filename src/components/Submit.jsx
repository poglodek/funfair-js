import { Button } from "./Button";

export function Submit({ text, onSubmit }) {

    return (
        <Button text={text} callBack={onSubmit} />

    );
}