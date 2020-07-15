const InitialState = {
  Home: {
    selected: true,
  },

  Shirt: {
    selected: false,
    innerSelection: {
      fabricSelector: {
        selected: true,
        innerSelectionfabric: {
          shirtoftheday: {
            selected: true,
            innerSelectionId: {
              id: 1,
            },
          },

          solidColors: {
            selected: false,

            innerItem: {
              id: 0,
            },
          },
          premierSolid: {
            selected: false,

            innerItem: {
              id: 0,
            },
          },
          patternOrganic: {
            selected: false,

            innerItem: {
              id: 0,
            },
          },
          egyptianCotton: {
            selected: false,

            innerItem: {
              id: 0,
            },
          },

          funnelShirts: {
            selected: false,
            innerItem: {
              id: 0,
            },
          },
          premiumWhite: {
            selected: false,
            innerItem: {
              id: 0,
            },
          },
        },
      },
      StyleSelector: {
        selected: false,
        innerSelectionStyle: {
          Front: {
            selected: false,
            innerSelectionId: {
              id: 0,
            },
          },

          Collor: {
            selected: false,

            innerItem: {
              id: 0,
            },
          },
          Back: {
            selected: false,

            innerItem: {
              id: 0,
            },
          },
          Bottom: {
            selected: false,

            innerItem: {
              id: 0,
            },
          },
          Sleeve: {
            selected: false,

            innerItem: {
              id: 0,
            },
          },

          Cuffs: {
            selected: false,
            innerItem: {
              id: 0,
            },
          },
          Pocket: {
            selected: false,
            innerItem: {
              id: 0,
            },
          },
        },
      },
    },
  },
  Pant: {
    selected: false,
  },

  Suit: {
    selected: false,
  },
};

const ClickedEvent = (state = InitialState, action) => {
  console.log("from clicked");
  console.log(action);

  switch (action.type) {
    case "CLICKED":
      return {
        ...(state = action.payload),
      };

    default:
      return { ...state };
  }
};

export default ClickedEvent;
