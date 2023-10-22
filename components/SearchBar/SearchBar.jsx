import * as React from 'react'
import { Searchbar } from 'react-native-paper';
import {StyleSheet} from 'react-native'

function SearchBar() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const styles = StyleSheet.create({
        searchBar: {
            margin:10,
            marginBottom:1
        }
    })
    return (
        <>
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery} //value of text input, use this to perform search in database
            style={styles.searchBar}
        />
        
        </>
    )
}

export default SearchBar