import { ReactNode } from "react"
import GridListContainer from "./styles"

interface Props<T> {
    renderItem: (item: T) => ReactNode,
    keyExtractor: (item: T) => number,
    data: T[]
}

function GridList<T>({ renderItem, keyExtractor, data }: Props<T>) {
    return (
        <GridListContainer>
            {data.map(item => <div key={keyExtractor(item)}>{renderItem(item)}</div>)}
        </GridListContainer>
    )
}

export default GridList