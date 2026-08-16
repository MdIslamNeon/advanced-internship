import PlayerDetail from '@/app/components/PlayerDetail'
import Searchbar from '@/app/components/Searchbar'
import Sidebar from '@/app/components/Sidebar'

function PlayerPage() {
  return (
    <>
      <Sidebar />
      <Searchbar />
      <PlayerDetail />
    </>
  )
}

export default PlayerPage
