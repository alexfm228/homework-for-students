import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [inputCount, setInputCount] = useState('5');
  const [fetchLimit, setFetchLimit] = useState('5');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!fetchLimit) return;

    setLoading(true);
    setError('');

    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${fetchLimit}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Не вдалося завантажити список завдань');
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [fetchLimit]);

  const handleFetchPress = () => {
    setFetchLimit(inputCount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Homework</Text>

      <TextInput
        style={styles.input}
        placeholder="Введіть кількість завдань (напр. 5)"
        keyboardType="numeric"
        value={inputCount}
        onChangeText={setInputCount}
      />

      <Button title="Отримати список" onPress={handleFetchPress} />

      {loading && <Text style={styles.loadingText}>Завантаження даних...</Text>}

      {error ? <Text style={styles.errorText}>Помилка: {error}</Text> : null}

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskTitle}>• {item.title}</Text>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  list: {
    marginTop: 20,
  },
  taskItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  taskTitle: {
    fontSize: 16,
    color: '#444',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#007AFF',
    fontSize: 16,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 15,
    color: 'red',
    fontSize: 16,
  },
});
