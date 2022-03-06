import { atom } from 'recoil'
const latState = atom(
    {
        key: 'LATSTATE',
        default: '',
    }
)

const lngState = atom(
    {
        key: 'LONGSTATE',
        default: ''
    }
)

export {
    latState, lngState
}