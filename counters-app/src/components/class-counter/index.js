import { Component }from "react";
import './index.scss';

class ClassCounter extends Component {
    state = {
        counter : 0,
    }

    inputValue(e) {
        this.setState({
            counter: +e.target.value,
        })
    };

    increase() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1,
            }
        });
    };

    decrease() {
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            }
        });
    };

    render() {
        return (
            <div className='class-counter'>
                <label htmlFor='counter'>Enter the number: </label>
                <input id='counter' type='number' value={this.state.counter} onChange={(e) => this.inputValue(e)} />
                <div className='class-counter__buttons'>
                    <button onClick={() => this.increase()}>+</button>
                    <button onClick={() => this.decrease()}>-</button>
                </div>
                <hr/>
            </div>
        )    
    };
};



export default ClassCounter;