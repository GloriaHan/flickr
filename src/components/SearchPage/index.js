import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

const SearchPage = () => {
  let navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${query}`)
  }

  return (
    <Container maxWidth="sm">
      <h1>Flickr Search</h1>
      <form onSubmit={handleSubmit}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TextField
            id="search-field"
            label="Search"
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </Stack>
      </form>
      <Outlet />
    </Container>
  )
}

export default SearchPage
