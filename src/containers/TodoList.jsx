import {connect} from 'react-redux';
import Todo from '../components/Todo';

function TodoList (props) {

    return (    
        <ul>
            {
                todos.map((todo, index) => {
                    return (
                        <Todo 
                            key={index}
                            id={todo.id}
                            text={todo.text}
                        />
                    );
                }
            )}
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);