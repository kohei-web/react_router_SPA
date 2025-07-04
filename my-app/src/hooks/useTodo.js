/**
 * useTodo
 *
 * @packages hooks
 *
 */


import { useState, useMemo } from "react";
import { initialTodoList, todoLength } from "../constants/data";

/**
 * useTodo
 *
 * @returns {[Object, Object]} 配列で2つのオブジェクト{states と actions}を返す
 *
 */


export const useTodo = () => {
    // 表示todoListの状態管理
    const [ todos, setTodos ] = useState(initialTodoList); /* グローバル */
    // todo_titleの追加テキストの状態管理 最初は空文字
    const [ originalText, setOriginalText ] = useState(""); /* 状態管理はローカル */
    // todo_contentの追加テキストの状態管理 最初は空文字
    const [ originalTextContent, setOriginalTextContent ] = useState(""); /* 状態管理はローカル */
    // idの状態管理
    const [ todoIdLength, setTodoIdLength ] = useState(todoLength); /* グローバル */
    // 検索テキストの状態管理
    const [ searchText, setSearchText ] = useState("");


    // todoList追加処理はグローバルにする
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    // createTodo内部にaddTodoを入れ込んでuseCallBackで再レンダリングを防止
    // titleとcontentはそれぞれのページから引数で受け取るようにする
    // titleとcontentの状態管理もAddTodoPagesの方で持たせる
    // 新しいtodoListの作成
    const createTodo = (e) => {
        // Enterがクリックかつ入力欄がからではない時にtodoを追加するようにする
        if (e.key === 'Enter' && originalText !== "") {
            // 現在のidに+1してインクリメントになるようにidを作成
            const originalId = todoIdLength + 1;

            // 追加するtodoの作成
            const todo = {
                id: originalId,
                title: originalText,
                content: originalTextContent,
            };

            // todoの追加
            addTodo(todo);

            // idの管理
            setTodoIdLength(originalId);

            // todo追加後に入力欄を空にする
            setOriginalText("");
            setOriginalTextContent("");
        }
    };

    // これらのハンドラーはローカルで定義する
    // 入力されたtodo_title追加テキストの状態管理ハンドラ
    const handleSetOriginalText = (e) => setOriginalText(e.target.value);
    // 入力されたtodo_content追加テキストの状態管理ハンドラ
    const handleSetOriginalTextContent = (e) => setOriginalTextContent(e.target.value);
    // 入力された検索テキストの状態管理ハンドラ
    const handleSetSearchText = (e) => setSearchText(e.target.value);

    // todoList検索処理はローカルで定義
    // フィルタリング後のtodoを返す
    // useMemoで同じ処理はスキップするようにする
    const showTodoList = useMemo(() => {
        return todos.filter((todo) => {
            // フィルタリング用の設定を作成
            const regexp = new RegExp("^" + searchText, "i");
            // todoのtitleがフィルタリングと合致したtodoのみ返す
            return todo.title.match(regexp);
        });
    }, [todos, searchText]);

    // todoList削除処理グローバルで定義
    const handleTodoDelete = (targetId) => {
        // 渡ってきたidの合致しないtodoListを作成
        const newTodos = todos.filter((todo => todo.id !== targetId));

        // 作成した新しいTodoListをtodoListを管理する状態関数に渡す
        setTodos(newTodos);
    };

    // これらも半分以上は不要になる
    return {
        showTodoList,
        originalText,
        originalTextContent,
        searchText,
        handleSetOriginalText,
        handleSetOriginalTextContent,
        createTodo,
        handleSetSearchText,
        handleTodoDelete,
    }

}
