import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Piece = ({ type }) => {
  const piecePathData = {
    pawn: 'M50 50h200v200h-200z',
  };

  return (
    <Svg width="100%" height="100%" viewBox="0 0 300 300">
      <Path d={piecePathData[type]} />
    </Svg>
  );
};

const Board = () => {
  const renderSquare = (i, j) => {
    const isLightSquare = (i + j) % 2 === 0;
    const piece = null;
    return (
      <View
        key={`${i},${j}`}
        style={[
          styles.square,
          { backgroundColor: isLightSquare ? 'white' : 'gray' },
        ]}>
        {piece && <Piece />}
      </View>
    );
  };

  const renderRow = (i) => (
    <View key={i} style={styles.row}>
      {renderSquare(i, 0)}
      {renderSquare(i, 1)}
      {renderSquare(i, 2)}
      {renderSquare(i, 3)}
      {renderSquare(i, 4)}
      {renderSquare(i, 5)}
      {renderSquare(i, 6)}
      {renderSquare(i, 7)}
    </View>
  );

  return (
    <View style={styles.board}>
      {renderRow(0)}
      {renderRow(1)}
      {renderRow(2)}
      {renderRow(3)}
      {renderRow(4)}
      {renderRow(5)}
      {renderRow(6)}
      {renderRow(7)}
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    borderwidth:4,
    bordercolor:'black',
    width: '100%',
    height: '80%',
    aspectRatio: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  square: {
    flex: 1,
  },
});
