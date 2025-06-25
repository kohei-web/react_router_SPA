import { InputForm } from "../../atoms/InputForm";
import styles from "../../../assets/commons/style.module.css";

export const AddTodo = (props) => {
    const { inputValue, onChangeText, handleKeyUp, inputValueContent, onChangeTextContent } = props;

    return (
        <div>
            <h2 className={styles.commonsTodo}>{"todo追加"}</h2>
            <InputForm
                inputValue={inputValue}
                onChangeText={onChangeText}
                placeholder="Todo_titleを追加"
                handleKeyUp={handleKeyUp}
            />
            <InputForm
                inputValue={inputValueContent}
                onChangeText={onChangeTextContent}
                placeholder="Todo_contentを追加"
                handleKeyUp={handleKeyUp}
            />
        </div>
    )
}
