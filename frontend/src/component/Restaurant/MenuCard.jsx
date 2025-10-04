import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { categoriseIngredients } from "../../util/categoriseIngredients";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../State/Cart/action";
import { Snackbar, Alert } from "@mui/material";

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.cart);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  
  const handleCheckBoxChange = (itemName) => {
    console.log("value");
    if (selectedIngredients.includes(itemName)) {
        setSelectedIngredients(
          selectedIngredients.filter((ingredient) => ingredient !== itemName)
        );
      } else {
        setSelectedIngredients([...selectedIngredients, itemName]);
      }
  };

  const ingredients = item.ingredientsItems || [];
  const categorisedIngredients = categoriseIngredients(ingredients);

  const handleAddItemToCart = (e) => {
    e.preventDefault()
    const reqData = {
      token: localStorage.getItem("jwt"),
      cartItem: {
        foodId: item.id,
        quantity: 1,
        ingredients: selectedIngredients,
      },
    };
    dispatch(addItemToCart(reqData));
    console.log("Add to cart data:", reqData);
  };
  
  // Show success notification when item is added to cart
  React.useEffect(() => {
    if (success) {
      setOpenSnackbar(true);
      // Auto hide after 3 seconds
      const timer = setTimeout(() => {
        setOpenSnackbar(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  console.log("Categorised ingredients:", categorisedIngredients);

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Item added to cart successfully!
        </Alert>
      </Snackbar>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src={item.images[0]}
                alt=""
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">{item.name}</p>
                <p className="">₹{item.price}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleAddItemToCart}>
            <div className="flex gap-5 flex-wrap">
              {Object.keys(categorisedIngredients).length > 0 ? (
                Object.keys(categorisedIngredients).map((category) => (
                  <div key={category}>
                    <p className="font-semibold">{category}</p>
                    <FormGroup>
                      {categorisedIngredients[category].map((ingredient) => (
                        <FormControlLabel
                          key={ingredient.id}
                          control={
                            <Checkbox
                              onChange={() => handleCheckBoxChange(ingredient.name)}
                            />
                          }
                          label={ingredient.name}
                        />
                      ))}
                    </FormGroup>
                  </div>
                ))
              ) : (
                <p>No ingredients available</p>
              )}
            </div>
            <div className="pt-5">
              <Button disabled={false} variant="contained" type="submit">
                {true ? "Add to Cart" : "Out Of Stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MenuCard;
