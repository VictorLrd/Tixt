export const USER_SELECTED = 'USER_SELECTED'
export function selectUser(user){
    return {
        type: USER_SELECTED,
        payload : user
    }
    
}

export function selectVoiture(voiture){
    return{
        type: 'VOITURE_SELECTED',
        payload: voiture
    }
}