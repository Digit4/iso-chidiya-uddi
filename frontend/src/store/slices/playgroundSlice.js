export const createPlaygroundSlice = (set) => ({
    sliderValue: 0,
    chidiyas: [],
    addChidiya: (chidiya) =>
        set((state) => ({
            chidiyas: [...state.chidiyas, chidiya],
        })),
    removeChidiya: (remID) =>
        set((state) => ({
            chidiyas: state.chidiyas.filter(
                (chidiya, index) => index !== remID
            ),
        })),
    clearChidiyas: () => set({ chidiyas: [] }),
    setSliderValue: (sliderValue) => set({ sliderValue }),
});
