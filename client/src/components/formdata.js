import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './formdata.css';

const FormDataForm = () => {
  const { handleSubmit, control, setValue, watch, formState } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log('Form data submitted:', data);
    setSubmitted(true);
  };

  const selectedCollege = watch("Dropdown");

  React.useEffect(() => {
    setValue("collegeName", selectedCollege);
  }, [selectedCollege, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: '10px' }}>
        <label>COLLEGES:</label>
        <Controller
          name="Dropdown"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <select {...field}>
                <option value="" disabled hidden>Select an option</option>
                <option value="KIET">Kakinada Institute Of Engineering And Technology</option>
                <option value="KIEW">Kakinada Institute Of Engineering And Technology, Womens</option>
                <option value="KIEK">Kakinada Institute Of Engineering And Technology, KIET-2</option>
              </select>
              {selectedCollege && (
                <div>
                  <Controller
                    name="collegeName"
                    control={control}
                    render={({ field }) => <input type="text" {...field} />}
                  />
                </div>
              )}
            </div>
          )}
        />
      </div>
      <div>
        <label>Date and Time:</label>
        <Controller
          name="DateAndDay"
          control={control}
          render={({ field }) => (
            <input type="datetime-local" {...field} style={{ width: '100%', boxSizing: 'border-box', marginTop: '3px', marginBottom: '10px' }} />
          )}
        />
      </div>
      <div>
        <label>Select:</label>
        <Controller
          name="Select"
          control={control}
          render={({ field }) => (
            <div>
              <label style={{ marginRight: '10px' }}>
                <input type="checkbox" value="KIET" {...field} /> KIET
              </label>
              <label style={{ marginRight: '10px' }}>
                <input type="checkbox" value="KIEW" {...field} /> KIEW
              </label>
              <label style={{ marginRight: '10px' }}>
                <input type="checkbox" value="KIEK" {...field} /> KIEK
              </label>
            </div>
          )}
        />
      </div>

      <div>
        <label>STUDENTS:</label>
        <div>
          <Controller
            name="student"
            control={control}
            render={({ field }) => (
              <div>
                <label style={{ marginmiddle: '10px' }}>
                  <input type="radio" value="Hostler" {...field} /> Hostler
                </label>
                <label style={{ marginmiddle: '10px' }}>
                  <input type="radio" value="DayScholar" {...field} /> DayScholar
                </label>
              </div>
            )}
          />
        </div>
      </div>

      <div>
        <label>Address of Student:</label>
        <Controller
          name="Address of Student"
          control={control}
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>

      <button type="submit" disabled={!formState.isValid }>Submit</button>

      {submitted && <p>Thank you for submitting the form!</p>}
      {!submitted && formState.dirty && <p>Not submitted</p>}
    </form>
  );
};

export default FormDataForm;
