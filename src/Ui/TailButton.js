
export default function TailButton({caption, color, handleClick}) {
  const btColor = {
    'blue': 'bg-blue-500',
    'orange': 'bg-orange-800',
  };
  const btColorHover = {
    'blue': 'bg-blue-600',
    'orange': 'bg-orange-600',
  };

  return (
    <button className = {`inline-flex justify-center items-center
                          p-3 mx-3
                          ${btColor[color]} text-white
                          ${btColorHover[color]} font-bold
                          rounded-md`}
              onClick = {handleClick}>
    {caption}
    </button>
  )
}
