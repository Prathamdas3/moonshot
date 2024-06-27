import { Heart } from 'lucide-react'
import { toast } from 'sonner'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function DefaultCard({ sample, list }) {
  const [liked, setLiked] = useState(false)
  const { id, title, image, description, tag } = sample
  useEffect(() => {
    list.includes(id.toString()) && setLiked(true)
  }, [list, id])

  return (
    <section className="p-2 space-x-5 transition-all duration-700 ease-in-out transform flex-no-grow-no-shrink rounded-xl origin-top-bottom hover:rotate-6 ">
      <div className="relative rounded-xl">
        {liked ? (
          <Heart
            className="absolute z-10 m-4 -top-1 -right-1"
            size={32}
            color="red"
            fill="red"
            onClick={() => {
              localStorage.removeItem(`cardId${id}`)
              toast.error(`You removed like from ${title} image`, {
                duration: 2000,
                style: {
                  background: 'red',
                  color: 'white',
                  border: 0,
                },
                className: 'class',
              })
              setLiked(false)
            }}
          />
        ) : (
          <Heart
            className="absolute z-10 m-4 -top-1 -right-1"
            size={24}
            color="#fff"
            onClick={() => {
              localStorage.setItem(`cardId${id}`, id)
              toast.success(`You add like to ${title} image`, {
                duration: 2000,
                style: {
                  background: 'green',
                  color: 'white',
                  border: 0,
                },
                className: 'class',
              })

              setLiked(true)
            }}
          />
        )}
        <img
          src={image}
          alt={`${title}`}
          className="aspect-[4/5] object-cover rounded-lg sm:rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 h-[400px] w-[320px]  sm:h-[600px] sm:w-[480px]"
        />
        <div
          className={`absolute z-10 p-4 text-white  ${
            tag !== '' ? '-bottom-3' : 'bottom-10'
          }`}
        >
          <h3 className="mt-3 space-y-3 text-xl font-bold sm:text-3xl">
            {title}
          </h3>
          <p className="font-normal tracking-wider text-justify text-muted line-clamp-2 text-wrap sm:w-72 w-52">
            {description}
          </p>
          {tag !== '' && (
            <div className="inline-block p-2 my-3 text-sm bg-blue-200 border-blue-900 rounded-lg text-blue-950 hover:text-blue-100 w-30 hover:border-2 hover:bg-transparent ">
              <p className="font-bold text-center ">{tag}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
DefaultCard.propTypes = {
  sample: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    tag: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
}
