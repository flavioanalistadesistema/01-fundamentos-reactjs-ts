import styles from './Avatar.module.css'

interface AvatarProps{
    src: string
    withBorder?: boolean
    alt?: string
}

export function Avatar({src, alt, withBorder = true}: AvatarProps) {
    return (
        <img 
            className={withBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src}
            alt={alt}
        />
    )
}