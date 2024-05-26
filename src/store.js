class Store {
    constructor() {
        this.state = [{}];//initial state -array of object
        this.listeners = [];//array to keep actions
    }

    //return current Sate
    getState() {
        return this.state;
    }

    //set new state
    setState(newState) {
        this.state = newState;//set new state
        this.dispatch() //call dispatch method 
    }
    dispatch() {
        //execute call back method with current state        
        this.listeners.forEach((callback) => callback(this.state));
    }

    subscribe(callback) {
        //push call back method is listeners array
        this.listeners.push(callback);
    }


}
const store = new Store();
export default store
