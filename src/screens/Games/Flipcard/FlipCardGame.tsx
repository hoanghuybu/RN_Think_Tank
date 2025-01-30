import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

const initialCards = [
  { id: 1, image: "🍎", matched: false },
  { id: 2, image: "🍌", matched: false },
  { id: 3, image: "🍎", matched: false },
  { id: 4, image: "🍌", matched: false },
  { id: 5, image: "🍇", matched: false },
  { id: 6, image: "🍇", matched: false }
];

const FlipCardGame = () => {
  const [cards, setCards] = useState(shuffleArray([...initialCards]));
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    } else if (!timerRunning && interval) {
      clearInterval(interval);
    }
    return () => interval && clearInterval(interval);
  }, [timerRunning]);

  const handleCardPress = (id: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(id)) return;

    const updatedFlipped = [...flippedCards, id];
    setFlippedCards(updatedFlipped);

    if (updatedFlipped.length === 2) {
      const [firstCard, secondCard] = updatedFlipped.map((index) =>
        cards.find((card) => card.id === index)
      );

      if (firstCard?.image === secondCard?.image) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            updatedFlipped.includes(card.id) ? { ...card, matched: true } : card
          )
        );
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  useEffect(() => {
    if (cards.every((card) => card.matched)) {
      setTimerRunning(false);
      Alert.alert("Chúc mừng!", `Bạn đã thắng sau ${time} giây!`);
    }
  }, [cards]);

  const handleStartGame = () => {
    setCards(shuffleArray([...initialCards]));
    setFlippedCards([]);
    setTime(0);
    setTimerRunning(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Thời gian: {time} giây</Text>
      <FlatList
        data={cards}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardComponent
            card={item}
            onPress={() => handleCardPress(item.id)}
            flipped={flippedCards.includes(item.id) || item.matched}
          />
        )}
      />
      <TouchableOpacity onPress={handleStartGame} style={styles.restartButton}>
        <Text style={styles.restartButtonText}>Chơi lại</Text>
      </TouchableOpacity>
    </View>
  );
};

const CardComponent = ({
  card,
  onPress,
  flipped
}: {
  card: { id: number; image: string; matched: boolean };
  onPress: () => void;
  flipped: boolean;
}) => {
  const flipAnimation = useSharedValue(0);

  // Khi trạng thái `flipped` thay đổi, kích hoạt animation
  useEffect(() => {
    flipAnimation.value = withTiming(flipped ? 180 : 0, { duration: 500 });
  }, [flipped]);

  // Áp dụng animation cho mặt trước và mặt sau
  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = `${interpolate(
      flipAnimation.value,
      [0, 180],
      [0, 180]
    )}deg`;
    return { transform: [{ rotateY }] };
  });

  const frontStyle = useAnimatedStyle(() => ({
    opacity: interpolate(flipAnimation.value, [0, 180], [1, 0])
  }));

  const backStyle = useAnimatedStyle(() => ({
    opacity: interpolate(flipAnimation.value, [0, 180], [0, 1])
  }));

  return (
    <TouchableOpacity onPress={onPress} disabled={flipped}>
      <Animated.View style={[styles.card, animatedStyle]}>
        {/* Mặt trước của thẻ */}
        <Animated.View style={[styles.cardFace, frontStyle]}>
          <Text style={styles.cardText}>❓</Text>
        </Animated.View>
        {/* Mặt sau của thẻ */}
        <Animated.View style={[styles.cardFace, backStyle, styles.cardBack]}>
          <Text style={styles.cardText}>{card.image}</Text>
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  timer: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  card: {
    width: 80,
    height: 100,
    margin: 10,
    perspective: 1000 // Tăng chiều sâu cho hiệu ứng 3D
  },
  cardFace: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden", // Ẩn mặt sau khi lật
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  cardBack: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50"
  },
  cardText: {
    fontSize: 30,
    color: "#fff"
  },
  restartButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5
  },
  restartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default FlipCardGame;
