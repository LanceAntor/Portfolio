import { useEffect, useRef, useState } from 'react'
import shareIcon from '../assets/share.png'
import awsArch from '../assets/credential_pictures/aws_arch.png'
import awsCloud from '../assets/credential_pictures/aws_cloud.png'
import zuittCert from '../assets/credential_pictures/zuitt_cert.png'
import pixel8Cert from '../assets/credential_pictures/pixel8_cert.png'

type CredentialItem = {
  title: string
  description: string
  image: string
  credentialUrl: string
}

const credentials: CredentialItem[] = [
  {
    title: 'AWS Cloud Architecting',
    description:
      'Completed foundational cloud architecture training focused on scalable, secure, and cost-efficient AWS solutions for modern applications.',
    image: awsArch,
    credentialUrl: 'https://www.credly.com/badges/cf334dbc-2af5-421b-ab55-d8543eccfc68/public_url',
  },
  {
    title: 'AWS Cloud Foundations',
    description:
      'Gained hands-on expertise in building resilient cloud architectures and applying AWS best practices for high availability.',
    image: awsCloud,
    credentialUrl: 'https://www.credly.com/badges/ea1643d9-8e9f-4af0-8865-8425a93f2a2a/linked_in_profile',
  },
  {
    title: 'Zuitt Intensive Career Program',
    description:
      'Strengthened skills in cloud design patterns, infrastructure planning, and service selection for reliable application deployment.',
    image: zuittCert,
    credentialUrl: 'https://share.zertify.zuitt.co/certificate/06581764-03ca-4f6c-86af-8f6e32837331',
  },
  {
    title: 'Pixel8 Training Program',
    description:
      'Applied architecture principles for networking, compute, and storage while balancing performance, resilience, and operational simplicity.',
    image: pixel8Cert,
    credentialUrl: 'https://drive.google.com/file/d/1ioM9kNCASCxXBZpPi9ImlYKycHlaLePD/view?usp=sharing',
  },
]

const fallbackCertificateImage = awsArch

const Credential = () => {
  const [animate, setAnimate] = useState(false)
  const credentialRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentCredentialRef = credentialRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
        } else {
          setAnimate(false)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (currentCredentialRef) {
      observer.observe(currentCredentialRef)
    }

    return () => {
      if (currentCredentialRef) {
        observer.unobserve(currentCredentialRef)
      }
    }
  }, [])

  return (
    <section
      className={`credential-section ${animate ? 'animate-credential-section' : ''}`}
      ref={credentialRef}
    >
      <div className="credential-container">
        <div className="credential-header">
          <h2 className="credential-title">Credentials</h2>
          <p className="credential-subtitle">
            Certifications that highlight my expertise and dedication to growth.
          </p>
        </div>

        <div className="credential-grid">
          {credentials.map((item, index) => (
            <article key={index} className="credential-card">
              <div className="credential-image-wrapper">
                <img
                  src={item.image}
                  alt={`${item.title} certificate preview`}
                  className="credential-image"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = fallbackCertificateImage
                  }}
                />
              </div>

              <div className="credential-content">
                <h3 className="credential-name">{item.title}</h3>
                <p className="credential-description">{item.description}</p>
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-link"
                >
                  View Credential <img src={shareIcon} alt="Open link" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Credential