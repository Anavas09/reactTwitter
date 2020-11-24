import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import { useDropzone } from "react-dropzone";

import { uploadBanner } from "../../../api/user";

import setUserDataToEdit from "../../../utils/editFormData";
import { API_HOST } from "../../../utils/constants";
import { CameraIcon } from "../../../utils/icons";

import AvatarNotFound from "../../../assets/png/avatar-not-found.png";

import "./EditUserForm.scss";

function EditUserForm({ setShowModal, user }) {
  console.log(user);
  const [formData, setFormData] = useState(setUserDataToEdit(user));
  const [avatarUrl, setAvatarUrl] = useState(
    user?.avatar ? `${API_HOST}/getAvatar?id=${user.id}` : AvatarNotFound
  );
  const [bannerUrl, setBannerUrl] = useState(
    user?.banner ? `${API_HOST}/getBanner?id=${user.id}` : null
  );
  const [bannerFile, setBannerFile] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  const onDropBanner = useCallback(acceptedFile => {
    const file = acceptedFile[0];
    setBannerUrl(URL.createObjectURL(file));
    console.log(acceptedFile);
    setBannerFile(file);
  }, []);

  const {
    getRootProps: getRootBannerProps,
    getInputProps: getInputBannerProps,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop: onDropBanner,
  });

  const onDropAvatar = useCallback(acceptedFile => {
    const file = acceptedFile[0];
    setAvatarUrl(URL.createObjectURL(file));
    console.log(acceptedFile);
    setAvatarFile(file);
  }, []);

  const {
    getRootProps: getRootAvatarProps,
    getInputProps: getInputAvatarProps,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    multiple: false,
    onDrop: onDropAvatar,
  });

  const handleOnChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log("Editing user");
    console.log(formData);
    console.log(bannerFile);
    console.log(avatarFile);

    if (bannerFile) {
      uploadBanner(bannerFile).catch(() =>
        toast.error("Error uploading the banner. Try again.")
      );
    }
  };

  return (
    <div className="edit-user-form">
      <div
        className="banner"
        style={{ backgroundImage: `url('${bannerUrl}')` }}
        {...getRootBannerProps()}
      >
        <CameraIcon />
        <input {...getInputBannerProps()} />
      </div>

      <div
        className="avatar"
        style={{ backgroundImage: `url('${avatarUrl}')` }}
        {...getRootAvatarProps()}
      >
        <CameraIcon />
        <input {...getInputAvatarProps()} />
      </div>

      <Form onSubmit={handleOnSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleOnChange}
                defaultValue={formData?.name}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Lastname"
                name="lastname"
                onChange={handleOnChange}
                defaultValue={formData?.lastname}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            row="3"
            placeholder="Add your biography"
            name="biography"
            onChange={handleOnChange}
            defaultValue={formData?.biography}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Website"
            name="website"
            onChange={handleOnChange}
            defaultValue={formData?.website}
          />
        </Form.Group>

        <Form.Group>
          <DatePicker
            locale={es}
            selected={new Date(formData.birthday)}
            onChange={value => setFormData({ ...formData, birthday: value })}
          />
        </Form.Group>

        <Button className="btn-submit" variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

EditUserForm.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default EditUserForm;
