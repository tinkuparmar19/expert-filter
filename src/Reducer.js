import expertData from './experts.json'

export const initialState = expertData.experts

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'DELETE_EXPERTISE':
             return state.filter(data => data.skills.includes(action.payload))
            
        case 'ADD_EXPERTISE':
            return initialState.filter(data => action.payload.every((i => v => i = data.skills.indexOf(v, i) + 1)(0)))
        
        case 'DELETE_RATING':
            return state.filter(data => data.rating >= action.payload)

        case 'ADD_RATING':
            if(action.payload == 0)
                return initialState
            else 
                return initialState.filter(data => data.rating >= action.payload)

        case 'DELETE_PRICE':
            return state.filter(data => data.price == action.payload)
            
        case 'ADD_PRICE':
            return initialState.filter(data => action.payload.includes(data.price))
        
        case 'DELETE_LANGUAGE':
            return state.filter(data => data.info[2].includes(action.payload))
        
        case 'ADD_LANGUAGE':
            return initialState.filter(data => action.payload.every((i => v => i = data.info[2].indexOf(v, i) + 1)(0)))
    
        default:
        return state;
    }
}