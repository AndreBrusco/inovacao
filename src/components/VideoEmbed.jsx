export default function VideoEmbed({ src, title = 'Vídeo do módulo' }) {
  if (!src) return null

  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-gray-900 aspect-video">
      <iframe
        src={src}
        title={title}
        className="w-full h-full"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  )
}
