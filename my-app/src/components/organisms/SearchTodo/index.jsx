/**
 * SearchTodo
 *
 * @package components
 *
 */


import { InputForm } from "../../atoms/InputForm";
import styles from "../../../assets/commons/style.module.css";

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
            <h2 className={styles.commonsTodo}>{"todo検索"}</h2>
            <InputForm
                inputValue={searchText}
                placeholder={"todoを検索"}
                onChangeText={handleChangeSearchText}
            />
        </>
    )
};
