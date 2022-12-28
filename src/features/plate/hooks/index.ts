export function usePlate() {
  const createDummyPlates = () => {
    const dummyPlates: number[] = []

    for (let i = 0; i < 10; i++) {
      dummyPlates.push(i)
    }

    return dummyPlates
  }

  return {
    plates: createDummyPlates(),
  }
}
