import style from './Catalog.module.css'
import { Card } from '../CardComponent/Card'

export function Catalog() {
    return (
        <>
            <div className={style.catalog_grid}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}