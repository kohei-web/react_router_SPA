/**
 * SearchTodo
 *
 * @package components
 *
 */


import { InputForm } from "../../atoms/InputForm";
import commonStyles from "../../../assets/commons/style.module.css";
import styles from "./styles.module.css";

/**
 *
 *
 * @param {*} props
 * @return {*}
 */

export const SearchTodo = (props) => {
    const { searchText, handleChangeSearchText } = props;

    return(
        <>
            <h2 className={commonStyles.commonsTodo}>{"todo検索"}</h2>
            <div className={styles.inputForm}>
                <InputForm
                    inputValue={searchText}
                    placeholder={"todoを検索"}
                    onChangeText={handleChangeSearchText}
                />
            </div>
        </>
    )
};
