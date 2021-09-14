import { ref } from '@vue/reactivity';

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http:/localhost:8080/news/' + id)
            if (!data.ok) {
                throw Error('the post doesnt exists')
            }
            post.value = await data.json()
        }
        catch (err) {
            error.value = err.message
        }
    }
    return { post, error, load}
}

export default getPost