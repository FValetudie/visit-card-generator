import React, { useEffect, useMemo } from 'react'
import cn from 'classnames'

import styles from './visitCard.module.css'
import { useCardContext } from './CardContext'
import { Email, Phone, Twitter } from '@material-ui/icons'
import { openSharedVisitCard } from './utils'

export default function CardPreview({ visitCard }: { visitCard?: string }) {
  const visitCardCtx = useCardContext()
  const {
    data: { company, firstname, lastname, position, email, twitter, phone },
    logo,
    style,
    computedStyle,
    fontStyles,
    isSettingsOpen,
  } = visitCardCtx
  const isCardEdited = useMemo(() => company || firstname || lastname, [
    company,
    firstname,
    lastname,
  ])

  const companyFontSize = useMemo(
    () =>
      Math.min(
        Math.max((0.08 / (company?.length ?? 2)) * style.width, 1),
        0.025 * style.height
      ),
    [company, style.height, style.width]
  )

  const logoSize = useMemo(() => style.height / 4, [style.height])

  useEffect(() => {
    if (visitCard && visitCard.length > 0) {
      openSharedVisitCard(visitCard, visitCardCtx)
    }
  }, [visitCard])

  return (
    <div
      className={cn(styles.cardPreview, {
        [styles.squeezed]: isSettingsOpen,
        [styles.showHelp]: !visitCard,
      })}
    >
      {isCardEdited ? (
        <div
          className={cn(styles.card, styles.cardFront)}
          style={computedStyle}
        >
          {logo && logo !== '' && (
            <div
              className={styles.logo}
              style={{
                height: logoSize,
                width: logoSize,
                backgroundImage: `url(${logo})`,
              }}
            ></div>
          )}
          <div
            className={styles.company}
            style={{ fontSize: `${companyFontSize}em` }}
          >
            <span style={fontStyles?.company}>{company}</span>
          </div>
        </div>
      ) : (
        <p>
          Click on the settings button (upper right corner) to start creating !
        </p>
      )}
      {isCardEdited && (
        <div className={cn(styles.card, styles.cardBack)} style={computedStyle}>
          <p
            className={styles.company}
            style={{ fontSize: `${(3 * companyFontSize) / 5}em` }}
          >
            <span style={fontStyles?.company}>{company}</span>
          </p>
          <div className={styles.cardData}>
            <p className={styles.cardOwner}>
              <span style={fontStyles?.firstname}>{firstname}</span>{' '}
              <span style={fontStyles?.lastname}>{lastname}</span>
            </p>
            <p className={styles.jobPosition}>
              <span style={fontStyles?.position}>{position}</span>
            </p>
            <p className={styles.contact}>
              {phone && (
                <span style={fontStyles?.phone}>
                  <Phone fontSize="inherit" /> {phone}
                </span>
              )}
              <br />
              {email && (
                <span style={fontStyles?.email}>
                  <Email fontSize="inherit" /> {email}
                </span>
              )}
              <br />
              {twitter && (
                <span style={fontStyles?.twitter}>
                  <Twitter fontSize="inherit" />
                  {twitter}
                </span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
