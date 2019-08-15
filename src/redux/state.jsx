
let store = {
    _state: {
        profile: {
            posts: [
                { ID: 1, text: 'Mauris sollicitudin vel erat sit amet condimentum. Aliquam erat volutpat. Vivamus sagittis metus ut felis accumsan, non dapibus metus cursus.', likes: 2 },
                { ID: 2, text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.', likes: 0 },
                { ID: 3, text: 'Quisque imperdiet quam ac enim iaculis, in hendrerit urna fermentum. Aliquam eleifend gravida sodales. Aenean mollis dui sit amet turpis maximus vehicula. Nam ultrices et eros vel scelerisque. In non magna eros. Duis nec tortor in nulla feugiat pulvinar eu et arcu. Vestibulum porttitor quis tellus eu molestie. Aenean ut purus imperdiet, semper magna in, molestie orci. Praesent elementum iaculis turpis in molestie. Vivamus eu venenatis tellus. Cras eget tempus erat, varius condimentum elit. Maecenas id mollis tortor, eget malesuada tellus. Donec in diam congue, viverra enim quis, iaculis nisl', likes: 1},
                { ID: 4, text: 'Vivamus dapibus urna quis tellus placerat, ac congue lectus commodo.', likes: 115 },
                { ID: 5, text: 'Duis sollicitudin dui urna, ac ultricies ex egestas sit amet. In hac habitasse platea dictumst.', likes: 0 },
            ],
            newPostText: 'it-kamasutra.com',
        },
        IM: {
            dialogs: [
                {
                    dialog:
                       {
                           ID: 1, contact: 'Steve Rogers',
                           messages: [
                               { message: 'First message', my: true },
                               { message: 'Second message', my: true },
                               { message: 'Third message', my: false },
                               { message: 'Third message2', my: false },
                               { message: 'Fourth message', my: true },
                               { message: 'Fifth message', my: false },
                           ]
                       }
                },
                {
                    dialog:
                       {
                           ID: 2, contact: 'Tony Stark',
                           messages: [
                               { message: 'First message', my: true },
                               { message: 'Second message', my: true },
                               { message: 'Third message', my: false },
                               { message: 'Fourth message', my: true },
                               { message: 'Fifth message', my: false },
                           ]
                       }
                },
                {
                    dialog:
                       {
                           ID: 3, contact: 'Tor',
                           messages: [
                               { message: 'First message', my: true },
                               { message: 'Second message', my: true },
                               { message: 'Third message', my: false },
                               { message: 'Fourth message', my: true },
                               { message: 'Fifth message', my: false },
                           ]
                       }

                },
                {
                    dialog:
                       {
                           ID: 4, contact: 'Natasha Romanoff',
                           messages: [
                               { message: 'First message', my: true },
                               { message: 'Second message', my: true },
                               { message: 'Third message', my: false },
                               { message: 'Fourth message', my: true },
                               { message: 'Fifth message', my: false },
                           ]
                       }

                },
                {
                    dialog:
                       {
                           ID: 5, contact: 'Wanda Maximoff',
                           messages: [
                               { message: 'Ahoj Bylo mi řečeno, že děláte pouliční magii?', my: true },
                               { message: 'Third message', my: false },
                               { message: 'Fourth message', my: true },
                               { message: 'Fifth message', my: false },
                           ]
                       }

                },
            ]
        }
    },

    getState(){
        return this._state;
    },

    _callSubscriber(){
        console.log('State updated')
    },

    addPost () {
        let newPost = {
            ID: 6,
            text: this._state.profile.newPostText,
            likes: 5,
        }
        this._state.profile.posts.push(newPost);
        this._state.profile.newPostText = '';
        this._callSubscriber(this._state);
    },

    updatePostText (newText) {
        this._state.profile.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;