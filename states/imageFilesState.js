import { atom } from 'recoil'
const onlineFiles = atom(
    {
        key: 'ONLINEFILES',
        default: []
    }
)
export {
    onlineFiles
}