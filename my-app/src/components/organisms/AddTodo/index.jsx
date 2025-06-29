import { InputForm } from "../../atoms/InputForm";
import commonStyles from "../../../assets/commons/style.module.css";
import styles from "./style.module.css";

export const AddTodo = (props) => {
    const { inputValue, onChangeText, handleKeyUp, inputValueContent, onChangeTextContent } = props;

    return (
        <div>
            <h2 className={commonStyles.commonsTodo}>{"todo追加"}</h2>
            <div className={styles.inputForm}>
                <InputForm
                    inputValue={inputValue}
                    onChangeText={onChangeText}
                    placeholder="Todo_titleを追加"
                    handleKeyUp={handleKeyUp}
                />
            </div>
            <div className={styles.inputForm}>
                <InputForm
                    inputValue={inputValueContent}
                    onChangeText={onChangeTextContent}
                    placeholder="Todo_contentを追加"
                    handleKeyUp={handleKeyUp}
                />
            </div>
        </div>
    )
}
