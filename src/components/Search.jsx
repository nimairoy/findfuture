import { BiSearch } from 'react-icons/bi'
import Container from './Container'

const Search = () => {
    return (
        <div className='py-10 px-8'>
            <Container>
                <div className="w-3/5 mx-auto relative">
                    <form >
                        <BiSearch className='absolute top-4 left-4 text-xl' />
                        <input type="search" name='search' placeholder='Search By College Name' className='input input-bordered w-full max-w-lg pl-12' />
                        <button className='btn btn-primary ml-4'>Search</button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Search