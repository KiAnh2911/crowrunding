import useOnchange from "../../../hooks/useOnchange";
import ReactQuill, { Quill } from "react-quill";
import React, { useEffect, useMemo, useState } from "react";
import ImageUploader from "quill-image-uploader";
import ImageUpload from "../../../components/image/ImageUpload";
import FormRow from "../../../components/common/FormRow";
import FormGroup from "../../../components/common/FormGroup";
import DatePicker from "react-date-picker";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Label } from "../../../components/label";
import { Input, Textarea } from "../../../components/input";
import { imgbbAPI } from "../../../components/config/config";
import { Dropdown } from "../../../components/dropdown";
import { Button } from "../../../components/button";
import "react-quill/dist/quill.snow.css";
Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["architecture", "education", "film"];
const CampaignAddNew = () => {
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const getDropdownLabel = (name) => {
    const value = watch(name);
    return value;
  };
  const [content, setContent] = useState("");
  const resetValues = () => {
    setEndDate("");
    setStartDate("");
    reset({});
  };
  const handleAddNewCampaign = async (values) => {
    try {
      axios.post("http://localhost:3009/api/campaigns", {
        ...values,
        content,
        startDate,
        endDate,
      });
      toast.success("tạo thành công campaigns");
      resetValues();
    } catch (error) {
      toast.error("Tạo thất bại campaigns");
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };
  const [countries, setCountries] = useState();
  // https://restcountries.com/v3.1/name/aruba?fullText=true
  const [filterCountry, setFilterCountry] = useOnchange(500);
  useEffect(() => {
    if (!filterCountry) return;
    async function fetchCountries() {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchCountries();
  }, [filterCountry]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 text-text2 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              name="title"
              placeholder="Write a title"
              control={control}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={
                  getDropdownLabel("category") || "Select the category"
                }
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData?.map((category) => (
                  <Dropdown.Option
                    key={category}
                    onClick={() =>
                      handleSelectDropdownOption("category", category)
                    }
                  >
                    <span className="capitalize">{category}</span>
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label>Short Description *</Label>
          <Textarea
            name="short_desc"
            placeholder="Write a short description...."
            control={control}
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story......"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label>Feature Image</Label>
            {/* imageUploader */}
            <ImageUpload onChange={setValue} name="feature_img"></ImageUpload>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Goal *</Label>
            <Input
              name="goal"
              placeholder="$0.00 USD"
              control={control}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">Raised Amount *</Label>
            <Input
              name="amount"
              placeholder="$0.00 USD"
              control={control}
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Amount Prefilled</Label>
            <Input
              name="prefilled"
              placeholder="Amount Prefilled"
              control={control}
            ></Input>
            <p className="text-sm text-text3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">Video</Label>
            <Input name="video" placeholder="Video" control={control}></Input>
            <p className="text-sm text-text3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one "></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>A</Dropdown.Option>
                <Dropdown.Option>B</Dropdown.Option>
                <Dropdown.Option>C</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Country</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("country") || "Select a country"}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search countries..."
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries?.length > 0 &&
                  countries?.map((country) => (
                    <Dropdown.Option
                      key={country?.name?.common}
                      onClick={() =>
                        handleSelectDropdownOption(
                          "country",
                          country?.name?.common
                        )
                      }
                    >
                      {country?.name?.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Start Date</Label>
            <DatePicker
              onChange={setStartDate}
              value={startDate}
              format="dd-MM-yyyy"
            />
            {/* <Input
              name="start_date"
              placeholder="Start Date"
              control={control}
            ></Input> */}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">End Date</Label>
            <DatePicker
              onChange={setEndDate}
              value={endDate}
              format="dd-MM-yyyy"
            />
          </FormGroup>
        </FormRow>
        <div className="mt-10">
          <Button type="submit" className="mx-auto px-10" kind="primary">
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignAddNew;
