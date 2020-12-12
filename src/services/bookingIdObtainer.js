import { Api } from '@/Api'

class BookingIdObtainer {
    async generateId(user) {
        return await Api.post('users/generate-id', user)
            .then(response => {
                return response.data
            })
    }
}

export default new BookingIdObtainer()
