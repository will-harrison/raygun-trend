
const Loading = ({ title, content }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{content || 'Loading...'}</div>
    </div>
  )
}

export default Loading