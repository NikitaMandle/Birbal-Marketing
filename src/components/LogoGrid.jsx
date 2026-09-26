// Add new images to public/assets/clients/ and increase this count when needed.
const clients = Array.from({ length: 10 }, (_, index) => ({
  name: `Client ${index + 1}`,
  file: `client${index + 1}.png`,
}))

const firstRow = clients
const secondRow = clients

function ClientCard({ client }) {
  return (
    <div className="logo-card">
      <img src={`/assets/clients/${client.file}`} alt={client.name} />
    </div>
  )
}

export default function LogoGrid() {
  return (
    <section className="logos-section" id="clients">
      <div className="container">

        <div className="logos-row logos-row-moving">
          <div className="logos-row-track">
            {[...firstRow, ...firstRow].map((client, index) => (
              <ClientCard client={client} key={`${client.file}-${index}`} />
            ))}
          </div>
        </div>

        <div className="logos-row logos-row-second">
          <div className="logos-row-track">
            {[...secondRow, ...secondRow].map((client, index) => (
              <ClientCard client={client} key={`${client.file}-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
