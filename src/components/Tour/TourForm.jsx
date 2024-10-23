import styled from "styled-components";
import { TOUR_REDUCER_TYPE } from "../../utils/constans";
import { axiosInstance } from "../../config/axiosInstance";
import { toast } from "react-toastify";
import useToggleAPI from "../hooks/useTourReducer";

export const TourForm = () => {
  const [
    state,
    titleChangehandler,
    imageChangehandler,
    priceChangehandler,
    dateChangehandler,
    descriptionChangehandler,
  ] = useToggleAPI();

  const handleSubmitTour = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/tours", state);
      if (response.status) {
        toast.success("Тур успешно добавлен!");
        dispatch({ type: TOUR_REDUCER_TYPE.RESET });
        console.log("hghfc");
      } else {
        throw new Error("redirect");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <FormStyles onSubmit={handleSubmitTour}>
      <StyledInput
        type="text"
        placeholder="Введите название тура"
        value={state.title}
        onChange={titleChangehandler}
      />
      <StyledInput
        type="url"
        placeholder="Вставте ссылку  тура"
        value={state.imageUrl}
        onChange={imageChangehandler}
      />
      <StyledInput
        type="number"
        placeholder="Введите стоимость тура"
        value={state.price}
        onChange={priceChangehandler}
      />
      <StyledInput
        type="date"
        placeholder="Выберите дату"
        value={state.date}
        onChange={dateChangehandler}
      />
      <StyledInput
        type="text"
        placeholder="Введите описание тура"
        value={state.description}
        onChange={descriptionChangehandler}
      />

      <Button type="submit">Add Tour</Button>
    </FormStyles>
  );
};

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 350px;
  height: fit-content;
  padding: 20px;
  box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.5);
  margin: 100px auto;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  height: 45px;
  border-radius: 6px;
  padding-left: 15px;
  padding-right: 10px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid gainsboro;
`;

const Button = styled.button`
  height: 45px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  background-color: #000;
  cursor: pointer;
`;
