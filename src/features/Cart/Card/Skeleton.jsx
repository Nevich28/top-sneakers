import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';

export const Skeleton = () => {
    return (
        <div className={styles.card}>
            <ContentLoader 
                speed={2}
                width={220}
                height={260}
                viewBox="0 0 210 260"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="110" /> 
                <rect x="0" y="137" rx="3" ry="3" width="150" height="15" /> 
                <rect x="0" y="221" rx="8" ry="8" width="80" height="24" /> 
                <rect x="0" y="156" rx="3" ry="3" width="93" height="18" /> 
                <rect x="118" y="215" rx="8" ry="8" width="32" height="32" />
            </ContentLoader>
        </div>
    )
}