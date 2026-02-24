import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ListRenderItem
} from 'react-native';

interface MenuItem {
  id: number;
  name: string;
  category: 'Veg' | 'Non-Veg' | 'Beverage';
  price: number;
  rating: number;
}

const menuData: MenuItem[] = [
  { id: 1, name: "Paneer Butter Masala", category: "Veg", price: 250, rating: 4.5 },
  { id: 2, name: "Chicken Biryani", category: "Non-Veg", price: 300, rating: 4.7 },
  { id: 3, name: "Cold Coffee", category: "Beverage", price: 120, rating: 4.2 }
];

const App: React.FC = () => {

  const getCategoryColor = (category: MenuItem['category']): string => {
    switch (category) {
      case 'Veg':
        return '#d4edda';
      case 'Non-Veg':
        return '#f8d7da';
      case 'Beverage':
        return '#d1ecf1';
      default:
        return '#ffffff';
    }
  };

  const renderItem: ListRenderItem<MenuItem> = ({ item }) => (
    <View style={[styles.card, { backgroundColor: getCategoryColor(item.category) }]}>
      <Text style={styles.name}>🍽 {item.name}</Text>
      <Text style={styles.text}>📂 Category: {item.category}</Text>
      <Text style={styles.text}>💰 Price: ₹{item.price}</Text>
      <Text style={styles.text}>⭐ Rating: {item.rating}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <Text style={styles.header}>Restaurant Menu</Text>

      {/* Vertical List */}
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContainer}
      />

      {/* Footer */}
      <Text style={styles.footer}>Thank You for Visiting</Text>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
    paddingHorizontal: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  listContainer: {
    paddingBottom: 20
  },
  card: {
    width: '100%',
    padding: 18,
    borderRadius: 20,
    elevation: 4
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 15,
    marginBottom: 5
  },
  separator: {
    height: 15
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 15
  }
});
