const INITIAL_STATE = {
    id: 0,
    username: null,
    email: '',
    token: '',
    verified: false,
    role: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                token: action.payload.token,
                verified: action.payload.verified,
                role: action.payload.role
            }
        case 'LOGOUT': 
            return INITIAL_STATE
        default :
            return INITIAL_STATE
    }
}